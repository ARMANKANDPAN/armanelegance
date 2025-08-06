from flask import Flask

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def root():
    # Serve the existing static index.html file
    return app.send_static_file('index.html')

# The static folder configuration allows all CSS, JS, images, etc. to be served automatically.
# Simply place them alongside index.html (as they already are).

if __name__ == '__main__':
    # Running on port 8000 to keep the same URL you have been using
    app.run(host='0.0.0.0', port=8000, debug=True)