from flask import Flask

from src.services.insurance.controller.controller import insurance_blueprint


# Application Factory
def create_application():
    app = Flask(__name__)
    # app.config['UPLOAD_FOLDER'] = './'
    app.register_blueprint(insurance_blueprint)
    return app


if __name__ == "__main__":
    app = create_application()
    app.run(host="0.0.0.0", port=5000, debug=True)