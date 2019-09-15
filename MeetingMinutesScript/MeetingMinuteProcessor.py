import logging

logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)

from gensim.summarization import summarize

import sys, json

# Region helper functions
def read_in():
    lines = sys.stdin.readLines()
    return json.loads(lines[0])

# end region

# Region runnables
def main():
    text = read_in()
    print(summarize(text))

if __name__ == '__main__':
    main()

# end region