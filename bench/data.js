window.BENCHMARK_DATA = {
  "lastUpdate": 1794418330587,
  "repoUrl": "https://github.com/pc2/Trixi.jl",
  "entries": {
    "Threads 1.10 PID": [
      {
        "commit": {
          "author": {
            "name": "Gerrit Pape",
            "username": "papeg",
            "email": "gerrit.pape@uni-paderborn.de"
          },
          "committer": {
            "name": "Gerrit Pape",
            "username": "papeg",
            "email": "gerrit.pape@uni-paderborn.de"
          },
          "id": "1041f3fe0152fe1c9961eda1c0679e2577dc2006",
          "message": "update setup description",
          "timestamp": "2026-11-11T16:31:59Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/1041f3fe0152fe1c9961eda1c0679e2577dc2006"
        },
        "date": 1794418315242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/threads=1",
            "value": 5.3062429447174074e-8,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=8",
            "value": 1.478430955180972e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=24",
            "value": 1.6016655133399268e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=48",
            "value": 1.7251823938760172e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=96",
            "value": 2.3559920431826714e-7,
            "unit": "s"
          }
        ]
      }
    ],
    "Threads 1.10 efficiency": [
      {
        "commit": {
          "author": {
            "name": "Gerrit Pape",
            "username": "papeg",
            "email": "gerrit.pape@uni-paderborn.de"
          },
          "committer": {
            "name": "Gerrit Pape",
            "username": "papeg",
            "email": "gerrit.pape@uni-paderborn.de"
          },
          "id": "1041f3fe0152fe1c9961eda1c0679e2577dc2006",
          "message": "update setup description",
          "timestamp": "2026-11-11T16:31:59Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/1041f3fe0152fe1c9961eda1c0679e2577dc2006"
        },
        "date": 1794418330579,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/threads=24",
            "value": 0.9230584930919965,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/threads=48",
            "value": 0.8569708109873172,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/threads=96",
            "value": 0.6275195026481428,
            "unit": "ratio"
          }
        ]
      }
    ]
  }
}