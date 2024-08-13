from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx
import logging

app = FastAPI()

logging.basicConfig(level=logging.INFO)

origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://demo-dag-backend.vercel.app",
    "https://demo-dag.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    logging.info(f"Received pipeline data: {pipeline}")
    nodes = pipeline.nodes
    edges = pipeline.edges

    # Create a directed graph using NetworkX
    Graph = nx.DiGraph()
    for node in nodes:
        Graph.add_node(node['id'])
    for edge in edges:
        Graph.add_edge(edge['source'], edge['target'])

    num_nodes = len(Graph.nodes)
    num_edges = len(Graph.edges)
    is_dag = nx.is_directed_acyclic_graph(Graph)

    logging.info(f"Number of nodes: {num_nodes}, Number of edges: {num_edges}, Is DAG: {is_dag}")
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
