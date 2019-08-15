"""
TEAM
"""
class Team:

    def __init__(self, name, color, seed):
        self.name = name
        self.color = color
        self.seed = seed
        self.id = 1  # TODO: add id generator (maybe in sqlite)

    def __repr__(self):
        return f"Team {self.name} (Seed: {self.seed})"

"""
BRACKET
"""
class Bracket:
    def __init__(self):
        pass

    def __repr__(self):
        return f"Bracket"