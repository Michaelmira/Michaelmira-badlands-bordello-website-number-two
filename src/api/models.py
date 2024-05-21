from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__="user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Questionnaire(db.Model):
    __tablename__="questionnaires"
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(50), unique=False, nullable=False)
    phone_number =  db.Column(db.String(50), unique=False, nullable=False)
    burner_email = db.Column(db.String(50), unique=False, nullable=False)
    campers = db.Column(db.String(100), unique=False, nullable=False)
    space_required = db.Column(db.String(100), unique=False, nullable=False)
    leader_question = db.Column(db.String(50), unique=False, nullable=False)
    camp_donation = db.Column(db.String(50), unique=False, nullable=False)
    early_arrival = db.Column(db.String(50), unique=False, nullable=False)
    why_go = db.Column(db.String(5000), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "phone_number": self.phone_number,
            "burner_email": self.burner_email,
            "campers": self.campers,
            "space_required": self.space_required,
            "leader_question": self.leader_question,
            "camp_donation": self.camp_donation,
            "early_arrival": self.early_arrival,
            "why_go": self.why_go
        }
    