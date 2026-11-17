window.BENCHMARK_DATA = {
  "lastUpdate": 1794910130583,
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
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794910104585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/threads=1",
            "value": 5.567277970631917e-8,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=8",
            "value": 1.4846956930686167e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=24",
            "value": 1.598099677461868e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=48",
            "value": 1.7438775661423743e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=96",
            "value": 2.3911112734915766e-7,
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
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794910130575,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/threads=24",
            "value": 0.9290382283454548,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/threads=48",
            "value": 0.8513761068404057,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/threads=96",
            "value": 0.6209228777967396,
            "unit": "ratio"
          }
        ]
      }
    ],
    "Threads 1.13 PID": [
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
        "date": 1794418345576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/threads=1",
            "value": 5.782948930740357e-8,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=8",
            "value": 2.0659243364108825e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=24",
            "value": 2.418888693727339e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=48",
            "value": 2.3118911754105828e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/threads=96",
            "value": 2.796149489093992e-7,
            "unit": "s"
          }
        ]
      }
    ],
    "Threads 1.13 efficiency": [
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
        "date": 1794418359809,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/threads=24",
            "value": 0.8540799507510356,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/threads=48",
            "value": 0.8936079510939707,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/threads=96",
            "value": 0.7388461684429766,
            "unit": "ratio"
          }
        ]
      }
    ],
    "MPI 1.10 PID": [
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
        "date": 1794418374404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/ranks=1",
            "value": 5.4638339112599684e-8,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=8",
            "value": 1.4859033892173465e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=24",
            "value": 1.5283928685399944e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=96",
            "value": 1.356058072466027e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=192",
            "value": 8.138406372070313e-8,
            "unit": "s"
          }
        ]
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794910037198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/ranks=1",
            "value": 5.4478711128234864e-8,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=8",
            "value": 1.5068227259117786e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=24",
            "value": 1.532699796970457e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=96",
            "value": 1.3466913129874862e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=192",
            "value": 8.853004418732765e-8,
            "unit": "s"
          }
        ]
      }
    ],
    "MPI 1.10 efficiency": [
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
        "date": 1794418395074,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/ranks=24",
            "value": 0.9721998969000449,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/ranks=96",
            "value": 1.095752032591932,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/ranks=192",
            "value": 1.8257915877938036,
            "unit": "ratio"
          }
        ]
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794910051995,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/ranks=24",
            "value": 0.9831166735261353,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/ranks=96",
            "value": 1.118907288834483,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/ranks=192",
            "value": 1.7020467342401575,
            "unit": "ratio"
          }
        ]
      }
    ],
    "MPI 1.13 PID": [
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
        "date": 1794418414806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/ranks=1",
            "value": 5.9110314254760735e-8,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=8",
            "value": 1.4874231160682019e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=24",
            "value": 1.5432585538659955e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=96",
            "value": 1.3950686982493447e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=192",
            "value": 1.0720642457938638e-7,
            "unit": "s"
          }
        ]
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794910066514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/ranks=1",
            "value": 5.68889693069458e-8,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=8",
            "value": 1.4892153931865542e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=24",
            "value": 1.5458177273902197e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=96",
            "value": 1.405139744582782e-7,
            "unit": "s"
          },
          {
            "name": "euler_source_terms/ranks=192",
            "value": 9.709684002373971e-8,
            "unit": "s"
          }
        ]
      }
    ],
    "MPI 1.13 efficiency": [
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
        "date": 1794418433546,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/ranks=24",
            "value": 0.9638197775363557,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/ranks=96",
            "value": 1.06620062362144,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/ranks=192",
            "value": 1.387438413233122,
            "unit": "ratio"
          }
        ]
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794910085585,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "euler_source_terms/ranks=24",
            "value": 0.9633835650861461,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/ranks=96",
            "value": 1.0598343680248943,
            "unit": "ratio"
          },
          {
            "name": "euler_source_terms/ranks=192",
            "value": 1.5337423883438928,
            "unit": "ratio"
          }
        ]
      }
    ],
    "GPU 1.10 PID": [
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
        "date": 1794418451331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "taylor_green_vortex/gpus=1",
            "value": 7.126858560826442e-10,
            "unit": "s"
          },
          {
            "name": "taylor_green_vortex/gpus=2",
            "value": 7.85806108269599e-10,
            "unit": "s"
          }
        ]
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794909976239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "taylor_green_vortex/gpus=1",
            "value": 7.157581099155776e-10,
            "unit": "s"
          },
          {
            "name": "taylor_green_vortex/gpus=2",
            "value": 7.81136161596377e-10,
            "unit": "s"
          }
        ]
      }
    ],
    "GPU 1.10 efficiency": [
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
        "date": 1794418469536,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "taylor_green_vortex/gpus=2",
            "value": 0.906948735295567,
            "unit": "ratio"
          }
        ]
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794909991227,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "taylor_green_vortex/gpus=2",
            "value": 0.9163038982253889,
            "unit": "ratio"
          }
        ]
      }
    ],
    "GPU 1.13 PID": [
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
        "date": 1794418486145,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "taylor_green_vortex/gpus=1",
            "value": 7.138687863148533e-10,
            "unit": "s"
          },
          {
            "name": "taylor_green_vortex/gpus=2",
            "value": 7.733392228884128e-10,
            "unit": "s"
          }
        ]
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794910006503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "taylor_green_vortex/gpus=1",
            "value": 7.115275981899961e-10,
            "unit": "s"
          },
          {
            "name": "taylor_green_vortex/gpus=2",
            "value": 7.868360287378866e-10,
            "unit": "s"
          }
        ]
      }
    ],
    "GPU 1.13 efficiency": [
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
        "date": 1794418504204,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "taylor_green_vortex/gpus=2",
            "value": 0.9230991590579899,
            "unit": "ratio"
          }
        ]
      },
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
          "id": "d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c",
          "message": "update hpc-cb-workflow\n\n- simpler benchmark configuration\n- additional permission check",
          "timestamp": "2026-11-16T17:04:36Z",
          "url": "https://github.com/pc2/Trixi.jl/commit/d195a48271d87a3d7cc6d70c2c2a7e166a19ac1c"
        },
        "date": 1794910022224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "taylor_green_vortex/gpus=2",
            "value": 0.9042895497951614,
            "unit": "ratio"
          }
        ]
      }
    ]
  }
}