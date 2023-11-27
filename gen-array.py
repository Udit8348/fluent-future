import os
import re

def process_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

        # Remove newlines and tabs
        content = re.sub(r'\n|\t', '', content)

        # Add the content to the JavaScript array format
        return f'`{content}`,'

def generate_js_array(folder_path, file_prefix, file_extension, num_files):
    js_array = []

    for i in range(num_files):
        file_name = f"{file_prefix}{i}.{file_extension}"
        file_path = os.path.join(folder_path, file_name)

        if os.path.exists(file_path):
            processed_content = process_html_file(file_path)
            js_array.append(processed_content)

    return js_array

def update_js_file(js_file_path, js_array):
    with open(js_file_path, 'r', encoding='utf-8') as js_file:
        js_content = js_file.read()

        # Find and replace the moduleContent array
        pattern = r'const moduleContent = \[.*?\];'
        replacement = f'const moduleContent = [\n    {"".join(js_array)}\n];'
        js_content = re.sub(pattern, replacement, js_content, flags=re.DOTALL)

    with open(js_file_path, 'w', encoding='utf-8') as js_file:
        js_file.write(js_content)

# Replace 'modules' and 'script.js' with the actual folder path and file name
folder_path = 'modules'
file_prefix = 'module'
file_extension = 'html'
num_files = 7  # Adjust this based on the number of files you have (e.g., module0.html to module6.html)
script_file_path = 'script.js'

js_array = generate_js_array(folder_path, file_prefix, file_extension, num_files)
update_js_file(script_file_path, js_array)

print(f'Updated {script_file_path} with the generated moduleContent array.')
