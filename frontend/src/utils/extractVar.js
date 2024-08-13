export const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    const variables = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      variables.push(match[1]);
    }
    return variables;
  };
  