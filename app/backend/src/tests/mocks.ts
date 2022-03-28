export const ADMIN = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW', // secret_admin
}

export const ADMIN_PAYLOAD = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
}

export const CLUBS = [
  {
    id: 1,
    clubName: 'Avaí/Kindermann',
  },
  {
    id: 2,
    clubName: 'Bahia',
  },
  {
    id: 3,
    clubName: 'Botafogo',
  },
  {
    id: 4,
    clubName: 'Corinthians',
  },
  {
    id: 5,
    clubName: 'Cruzeiro',
  }
]

export const MATCHS = [
  {
    "id": 1,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeClub": {
      "clubName": "São Paulo"
    },
    "awayClub": {
      "clubName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeClub": {
      "clubName": "Internacional"
    },
    "awayClub": {
      "clubName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeamGoals": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeClub": {
      "clubName": "Corinthians"
    },
    "awayClub": {
      "clubName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeClub": {
      "clubName": "Botafogo"
    },
    "awayClub": {
      "clubName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeClub": {
      "clubName": "Flamengo"
    },
    "awayClub": {
      "clubName": "Minas Brasília"
    }
  },
  {
    "id": 6,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeClub": {
      "clubName": "Cruzeiro"
    },
    "awayClub": {
      "clubName": "Real Brasília"
    }
  },
  {
    "id": 7,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeClub": {
      "clubName": "Palmeiras"
    },
    "awayClub": {
      "clubName": "Ferroviária"
    }
  },
  {
    "id": 8,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeClub": {
      "clubName": "São José-SP"
    },
    "awayClub": {
      "clubName": "Avaí/Kindermann"
    }
  },
  {
    "id": 9,
    "homeTeamGoals": 0,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeClub": {
      "clubName": "Avaí/Kindermann"
    },
    "awayClub": {
      "clubName": "Palmeiras"
    }
  },
  {
    "id": 10,
    "homeTeamGoals": 0,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeClub": {
      "clubName": "Bahia"
    },
    "awayClub": {
      "clubName": "Internacional"
    }
  }
]

export const LEADERBOARDMODEL = [
  {
    "id": 14,
    "clubName": "Santos",
    "awayTeam": [
      {
        "id": 2,
        "homeTeam": 9,
        "awayTeam": 14,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 9,
        "away_team": 14
      },
      {
        "id": 24,
        "homeTeam": 10,
        "awayTeam": 14,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 10,
        "away_team": 14
      }
    ],
    "homeTeam": [
      {
        "id": 14,
        "homeTeam": 14,
        "awayTeam": 16,
        "homeTeamGoals": 2,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 14,
        "away_team": 16
      },
      {
        "id": 32,
        "homeTeam": 14,
        "awayTeam": 11,
        "homeTeamGoals": 5,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 14,
        "away_team": 11
      },
      {
        "id": 38,
        "homeTeam": 14,
        "awayTeam": 4,
        "homeTeamGoals": 2,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 14,
        "away_team": 4
      }
    ]
  },
  {
    "id": 11,
    "clubName": "Napoli-SC",
    "awayTeam": [
      {
        "id": 3,
        "homeTeam": 4,
        "awayTeam": 11,
        "homeTeamGoals": 3,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 4,
        "away_team": 11
      },
      {
        "id": 32,
        "homeTeam": 14,
        "awayTeam": 11,
        "homeTeamGoals": 5,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 14,
        "away_team": 11
      },
      {
        "id": 39,
        "homeTeam": 3,
        "awayTeam": 11,
        "homeTeamGoals": 2,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 3,
        "away_team": 11
      }
    ],
    "homeTeam": [
      {
        "id": 16,
        "homeTeam": 11,
        "awayTeam": 7,
        "homeTeamGoals": 0,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 11,
        "away_team": 7
      },
      {
        "id": 19,
        "homeTeam": 11,
        "awayTeam": 2,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 11,
        "away_team": 2
      }
    ]
  },
  {
    "id": 2,
    "clubName": "Bahia",
    "awayTeam": [
      {
        "id": 4,
        "homeTeam": 3,
        "awayTeam": 2,
        "homeTeamGoals": 0,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 3,
        "away_team": 2
      },
      {
        "id": 19,
        "homeTeam": 11,
        "awayTeam": 2,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 11,
        "away_team": 2
      }
    ],
    "homeTeam": [
      {
        "id": 10,
        "homeTeam": 2,
        "awayTeam": 9,
        "homeTeamGoals": 0,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 2,
        "away_team": 9
      },
      {
        "id": 25,
        "homeTeam": 2,
        "awayTeam": 6,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 2,
        "away_team": 6
      },
      {
        "id": 36,
        "homeTeam": 2,
        "awayTeam": 7,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 2,
        "away_team": 7
      },
      {
        "id": 56,
        "homeTeam": 2,
        "awayTeam": 1,
        "homeTeamGoals": 15,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 2,
        "away_team": 1
      }
    ]
  },
  {
    "id": 10,
    "clubName": "Minas Brasília",
    "awayTeam": [
      {
        "id": 5,
        "homeTeam": 7,
        "awayTeam": 10,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 7,
        "away_team": 10
      },
      {
        "id": 31,
        "homeTeam": 8,
        "awayTeam": 10,
        "homeTeamGoals": 2,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 8,
        "away_team": 10
      }
    ],
    "homeTeam": [
      {
        "id": 15,
        "homeTeam": 10,
        "awayTeam": 15,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 10,
        "away_team": 15
      },
      {
        "id": 24,
        "homeTeam": 10,
        "awayTeam": 14,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 10,
        "away_team": 14
      },
      {
        "id": 35,
        "homeTeam": 10,
        "awayTeam": 5,
        "homeTeamGoals": 1,
        "awayTeamGoals": 3,
        "inProgress": false,
        "home_team": 10,
        "away_team": 5
      }
    ]
  },
  {
    "id": 13,
    "clubName": "Real Brasília",
    "awayTeam": [
      {
        "id": 6,
        "homeTeam": 5,
        "awayTeam": 13,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 5,
        "away_team": 13
      },
      {
        "id": 21,
        "homeTeam": 6,
        "awayTeam": 13,
        "homeTeamGoals": 3,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 6,
        "away_team": 13
      },
      {
        "id": 37,
        "homeTeam": 15,
        "awayTeam": 13,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 15,
        "away_team": 13
      }
    ],
    "homeTeam": [
      {
        "id": 11,
        "homeTeam": 13,
        "awayTeam": 3,
        "homeTeamGoals": 1,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 13,
        "away_team": 3
      },
      {
        "id": 26,
        "homeTeam": 13,
        "awayTeam": 1,
        "homeTeamGoals": 1,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 13,
        "away_team": 1
      }
    ]
  },
  {
    "id": 6,
    "clubName": "Ferroviária",
    "awayTeam": [
      {
        "id": 7,
        "homeTeam": 12,
        "awayTeam": 6,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 12,
        "away_team": 6
      },
      {
        "id": 25,
        "homeTeam": 2,
        "awayTeam": 6,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 2,
        "away_team": 6
      },
      {
        "id": 34,
        "homeTeam": 9,
        "awayTeam": 6,
        "homeTeamGoals": 3,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 9,
        "away_team": 6
      }
    ],
    "homeTeam": [
      {
        "id": 12,
        "homeTeam": 6,
        "awayTeam": 4,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 6,
        "away_team": 4
      },
      {
        "id": 21,
        "homeTeam": 6,
        "awayTeam": 13,
        "homeTeamGoals": 3,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 6,
        "away_team": 13
      }
    ]
  },
  {
    "id": 1,
    "clubName": "Avaí/Kindermann",
    "awayTeam": [
      {
        "id": 8,
        "homeTeam": 15,
        "awayTeam": 1,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 15,
        "away_team": 1
      },
      {
        "id": 26,
        "homeTeam": 13,
        "awayTeam": 1,
        "homeTeamGoals": 1,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 13,
        "away_team": 1
      },
      {
        "id": 56,
        "homeTeam": 2,
        "awayTeam": 1,
        "homeTeamGoals": 15,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 2,
        "away_team": 1
      }
    ],
    "homeTeam": [
      {
        "id": 9,
        "homeTeam": 1,
        "awayTeam": 12,
        "homeTeamGoals": 0,
        "awayTeamGoals": 3,
        "inProgress": false,
        "home_team": 1,
        "away_team": 12
      },
      {
        "id": 17,
        "homeTeam": 1,
        "awayTeam": 8,
        "homeTeamGoals": 2,
        "awayTeamGoals": 3,
        "inProgress": false,
        "home_team": 1,
        "away_team": 8
      },
      {
        "id": 33,
        "homeTeam": 1,
        "awayTeam": 16,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 1,
        "away_team": 16
      }
    ]
  },
  {
    "id": 12,
    "clubName": "Palmeiras",
    "awayTeam": [
      {
        "id": 9,
        "homeTeam": 1,
        "awayTeam": 12,
        "homeTeamGoals": 0,
        "awayTeamGoals": 3,
        "inProgress": false,
        "home_team": 1,
        "away_team": 12
      },
      {
        "id": 30,
        "homeTeam": 3,
        "awayTeam": 12,
        "homeTeamGoals": 0,
        "awayTeamGoals": 4,
        "inProgress": false,
        "home_team": 3,
        "away_team": 12
      }
    ],
    "homeTeam": [
      {
        "id": 7,
        "homeTeam": 12,
        "awayTeam": 6,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 12,
        "away_team": 6
      },
      {
        "id": 18,
        "homeTeam": 12,
        "awayTeam": 5,
        "homeTeamGoals": 4,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 12,
        "away_team": 5
      },
      {
        "id": 40,
        "homeTeam": 12,
        "awayTeam": 8,
        "homeTeamGoals": 4,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 12,
        "away_team": 8
      }
    ]
  },
  {
    "id": 9,
    "clubName": "Internacional",
    "awayTeam": [
      {
        "id": 10,
        "homeTeam": 2,
        "awayTeam": 9,
        "homeTeamGoals": 0,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 2,
        "away_team": 9
      },
      {
        "id": 20,
        "homeTeam": 7,
        "awayTeam": 9,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 7,
        "away_team": 9
      },
      {
        "id": 41,
        "homeTeam": 16,
        "awayTeam": 9,
        "homeTeamGoals": 2,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 16,
        "away_team": 9
      }
    ],
    "homeTeam": [
      {
        "id": 2,
        "homeTeam": 9,
        "awayTeam": 14,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 9,
        "away_team": 14
      },
      {
        "id": 29,
        "homeTeam": 9,
        "awayTeam": 4,
        "homeTeamGoals": 0,
        "awayTeamGoals": 4,
        "inProgress": false,
        "home_team": 9,
        "away_team": 4
      },
      {
        "id": 34,
        "homeTeam": 9,
        "awayTeam": 6,
        "homeTeamGoals": 3,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 9,
        "away_team": 6
      }
    ]
  },
  {
    "id": 3,
    "clubName": "Botafogo",
    "awayTeam": [
      {
        "id": 11,
        "homeTeam": 13,
        "awayTeam": 3,
        "homeTeamGoals": 1,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 13,
        "away_team": 3
      },
      {
        "id": 22,
        "homeTeam": 4,
        "awayTeam": 3,
        "homeTeamGoals": 3,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 4,
        "away_team": 3
      }
    ],
    "homeTeam": [
      {
        "id": 4,
        "homeTeam": 3,
        "awayTeam": 2,
        "homeTeamGoals": 0,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 3,
        "away_team": 2
      },
      {
        "id": 30,
        "homeTeam": 3,
        "awayTeam": 12,
        "homeTeamGoals": 0,
        "awayTeamGoals": 4,
        "inProgress": false,
        "home_team": 3,
        "away_team": 12
      },
      {
        "id": 39,
        "homeTeam": 3,
        "awayTeam": 11,
        "homeTeamGoals": 2,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 3,
        "away_team": 11
      }
    ]
  },
  {
    "id": 4,
    "clubName": "Corinthians",
    "awayTeam": [
      {
        "id": 12,
        "homeTeam": 6,
        "awayTeam": 4,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 6,
        "away_team": 4
      },
      {
        "id": 29,
        "homeTeam": 9,
        "awayTeam": 4,
        "homeTeamGoals": 0,
        "awayTeamGoals": 4,
        "inProgress": false,
        "home_team": 9,
        "away_team": 4
      },
      {
        "id": 38,
        "homeTeam": 14,
        "awayTeam": 4,
        "homeTeamGoals": 2,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 14,
        "away_team": 4
      }
    ],
    "homeTeam": [
      {
        "id": 3,
        "homeTeam": 4,
        "awayTeam": 11,
        "homeTeamGoals": 3,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 4,
        "away_team": 11
      },
      {
        "id": 22,
        "homeTeam": 4,
        "awayTeam": 3,
        "homeTeamGoals": 3,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 4,
        "away_team": 3
      }
    ]
  },
  {
    "id": 5,
    "clubName": "Cruzeiro",
    "awayTeam": [
      {
        "id": 13,
        "homeTeam": 8,
        "awayTeam": 5,
        "homeTeamGoals": 2,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 8,
        "away_team": 5
      },
      {
        "id": 18,
        "homeTeam": 12,
        "awayTeam": 5,
        "homeTeamGoals": 4,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 12,
        "away_team": 5
      },
      {
        "id": 35,
        "homeTeam": 10,
        "awayTeam": 5,
        "homeTeamGoals": 1,
        "awayTeamGoals": 3,
        "inProgress": false,
        "home_team": 10,
        "away_team": 5
      }
    ],
    "homeTeam": [
      {
        "id": 6,
        "homeTeam": 5,
        "awayTeam": 13,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 5,
        "away_team": 13
      },
      {
        "id": 27,
        "homeTeam": 5,
        "awayTeam": 15,
        "homeTeamGoals": 1,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 5,
        "away_team": 15
      }
    ]
  },
  {
    "id": 16,
    "clubName": "São Paulo",
    "awayTeam": [
      {
        "id": 14,
        "homeTeam": 14,
        "awayTeam": 16,
        "homeTeamGoals": 2,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 14,
        "away_team": 16
      },
      {
        "id": 23,
        "homeTeam": 15,
        "awayTeam": 16,
        "homeTeamGoals": 2,
        "awayTeamGoals": 3,
        "inProgress": false,
        "home_team": 15,
        "away_team": 16
      },
      {
        "id": 33,
        "homeTeam": 1,
        "awayTeam": 16,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 1,
        "away_team": 16
      }
    ],
    "homeTeam": [
      {
        "id": 28,
        "homeTeam": 16,
        "awayTeam": 7,
        "homeTeamGoals": 3,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 16,
        "away_team": 7
      },
      {
        "id": 41,
        "homeTeam": 16,
        "awayTeam": 9,
        "homeTeamGoals": 2,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 16,
        "away_team": 9
      }
    ]
  },
  {
    "id": 15,
    "clubName": "São José-SP",
    "awayTeam": [
      {
        "id": 15,
        "homeTeam": 10,
        "awayTeam": 15,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 10,
        "away_team": 15
      },
      {
        "id": 27,
        "homeTeam": 5,
        "awayTeam": 15,
        "homeTeamGoals": 1,
        "awayTeamGoals": 2,
        "inProgress": false,
        "home_team": 5,
        "away_team": 15
      }
    ],
    "homeTeam": [
      {
        "id": 8,
        "homeTeam": 15,
        "awayTeam": 1,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 15,
        "away_team": 1
      },
      {
        "id": 23,
        "homeTeam": 15,
        "awayTeam": 16,
        "homeTeamGoals": 2,
        "awayTeamGoals": 3,
        "inProgress": false,
        "home_team": 15,
        "away_team": 16
      },
      {
        "id": 37,
        "homeTeam": 15,
        "awayTeam": 13,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 15,
        "away_team": 13
      }
    ]
  },
  {
    "id": 7,
    "clubName": "Flamengo",
    "awayTeam": [
      {
        "id": 16,
        "homeTeam": 11,
        "awayTeam": 7,
        "homeTeamGoals": 0,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 11,
        "away_team": 7
      },
      {
        "id": 28,
        "homeTeam": 16,
        "awayTeam": 7,
        "homeTeamGoals": 3,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 16,
        "away_team": 7
      },
      {
        "id": 36,
        "homeTeam": 2,
        "awayTeam": 7,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 2,
        "away_team": 7
      }
    ],
    "homeTeam": [
      {
        "id": 5,
        "homeTeam": 7,
        "awayTeam": 10,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 7,
        "away_team": 10
      },
      {
        "id": 20,
        "homeTeam": 7,
        "awayTeam": 9,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 7,
        "away_team": 9
      }
    ]
  },
  {
    "id": 8,
    "clubName": "Grêmio",
    "awayTeam": [
      {
        "id": 17,
        "homeTeam": 1,
        "awayTeam": 8,
        "homeTeamGoals": 2,
        "awayTeamGoals": 3,
        "inProgress": false,
        "home_team": 1,
        "away_team": 8
      },
      {
        "id": 40,
        "homeTeam": 12,
        "awayTeam": 8,
        "homeTeamGoals": 4,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 12,
        "away_team": 8
      }
    ],
    "homeTeam": [
      {
        "id": 13,
        "homeTeam": 8,
        "awayTeam": 5,
        "homeTeamGoals": 2,
        "awayTeamGoals": 1,
        "inProgress": false,
        "home_team": 8,
        "away_team": 5
      },
      {
        "id": 31,
        "homeTeam": 8,
        "awayTeam": 10,
        "homeTeamGoals": 2,
        "awayTeamGoals": 0,
        "inProgress": false,
        "home_team": 8,
        "away_team": 10
      }
    ]
  }
]

export const EXPECTED_LEADERBOARD_RESULT = [
  {
    "name": "Palmeiras",
    "totalPoints": 13,
    "totalGames": 5,
    "totalVictories": 4,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsFavor": 17,
    "goalsOwn": 5,
    "goalsBalance": 12,
    "efficiency": 86.67
  },
  {
    "name": "Corinthians",
    "totalPoints": 12,
    "totalGames": 5,
    "totalVictories": 4,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 12,
    "goalsOwn": 3,
    "goalsBalance": 9,
    "efficiency": 80
  },
  {
    "name": "Santos",
    "totalPoints": 11,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsFavor": 12,
    "goalsOwn": 6,
    "goalsBalance": 6,
    "efficiency": 73.33
  },
  {
    "name": "São Paulo",
    "totalPoints": 10,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 10,
    "goalsOwn": 5,
    "goalsBalance": 5,
    "efficiency": 66.67
  },
  {
    "name": "Real Brasília",
    "totalPoints": 10,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 5,
    "goalsOwn": 4,
    "goalsBalance": 1,
    "efficiency": 66.67
  },
  {
    "name": "Internacional",
    "totalPoints": 10,
    "totalGames": 6,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 2,
    "goalsFavor": 7,
    "goalsOwn": 8,
    "goalsBalance": -1,
    "efficiency": 55.56
  },
  {
    "name": "Grêmio",
    "totalPoints": 9,
    "totalGames": 4,
    "totalVictories": 3,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 8,
    "goalsOwn": 7,
    "goalsBalance": 1,
    "efficiency": 75
  },
  {
    "name": "Ferroviária",
    "totalPoints": 7,
    "totalGames": 5,
    "totalVictories": 2,
    "totalDraws": 1,
    "totalLosses": 2,
    "goalsFavor": 7,
    "goalsOwn": 7,
    "goalsBalance": 0,
    "efficiency": 46.67
  },
  {
    "name": "São José-SP",
    "totalPoints": 6,
    "totalGames": 5,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsFavor": 5,
    "goalsOwn": 6,
    "goalsBalance": -1,
    "efficiency": 40
  },
  {
    "name": "Bahia",
    "totalPoints": 5,
    "totalGames": 6,
    "totalVictories": 1,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 17,
    "goalsOwn": 8,
    "goalsBalance": 9,
    "efficiency": 27.78
  },
  {
    "name": "Flamengo",
    "totalPoints": 5,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 2,
    "totalLosses": 2,
    "goalsFavor": 2,
    "goalsOwn": 5,
    "goalsBalance": -3,
    "efficiency": 33.33
  },
  {
    "name": "Cruzeiro",
    "totalPoints": 4,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 8,
    "goalsOwn": 10,
    "goalsBalance": -2,
    "efficiency": 26.67
  },
  {
    "name": "Botafogo",
    "totalPoints": 4,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 3,
    "goalsOwn": 8,
    "goalsBalance": -5,
    "efficiency": 26.67
  },
  {
    "name": "Avaí/Kindermann",
    "totalPoints": 4,
    "totalGames": 6,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 4,
    "goalsFavor": 6,
    "goalsOwn": 23,
    "goalsBalance": -17,
    "efficiency": 22.22
  },
  {
    "name": "Minas Brasília",
    "totalPoints": 2,
    "totalGames": 5,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 4,
    "goalsOwn": 9,
    "goalsBalance": -5,
    "efficiency": 13.33
  },
  {
    "name": "Napoli-SC",
    "totalPoints": 2,
    "totalGames": 5,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 3,
    "goalsOwn": 12,
    "goalsBalance": -9,
    "efficiency": 13.33
  }
]