import subprocess
import sys

def install_packages(package_list):
    for package in package_list:
        try:
            subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])
        except subprocess.CalledProcessError as e:
            print(f"Failed to install package {package}: {e}")
        else:
            print(f"Successfully installed package {package}")

def read_requirements_file(file_path):
    with open(file_path, 'r') as file:
        packages = file.readlines()
    return [pkg.strip() for pkg in packages]

if __name__ == "__main__":
    requirements_file = 'requirements.txt'
    packages_to_install = read_requirements_file(requirements_file)
    install_packages(packages_to_install)


