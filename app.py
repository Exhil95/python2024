import flask

app = flask.Flask(__name__)

@app.route('/')
def index():
    html = '<head><link rel="icon" type="image/x-icon" href="favicon.ico"></head>'
    html += '<body>Witaj w stronach FLASK!</body>'
    return html

@app.route('/newSite')
def renderIndex():
    return flask.render_template('index.html')

@app.route('/gallery')
def renderGallery():
    return flask.render_template('gallery.html')

if __name__ == '__main__':
    app.run()