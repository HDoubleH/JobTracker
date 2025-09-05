from flask import Flask
from flask_cors import CORS
from routes import api

def create_app():
    app = Flask(__name__)
    CORS(app)  # allow frontend requests

    app.config.from_object("config.Config")

    # Register blueprints
    app.register_blueprint(api, url_prefix="/api")

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)


