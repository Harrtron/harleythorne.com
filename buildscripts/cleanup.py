import shutil
"""
Remove the "public" directory if it already exists
"""
try:
    shutil.rmtree("../public")
except OSError:
    print("Directory did not exist. That's fine!")
    exit(0)