// Photo albums linked from News. Generated from the original photo folders;
// images live in assets/img/events/<id>/ (full size) and <id>/thumb/ (600px wide).
// To add an album: put images there and add an entry here (newest first).
// Optional "link": URL of the event's official page, shown under the title ("linkLabel" overrides the text).
// An album can use "sections": [{title, photos}, ...] instead of a flat "photos" list.
// Photos are shown in list order (presentation -> group -> selfie -> scenery).
// A video goes in the list as {"video": "...mp4", "poster": "...jpg", "caption": "..."}.
const EVENTS = [
  {
    "id": "2026-10-nbaa-bace",
    "date": "Oct 2026",
    "title": "NBAA-BACE 2026",
    "place": "Las Vegas, USA",
    "photos": [
      {
        "src": "03.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "05.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "02.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "04.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "06.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "07.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "08.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "09.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "10.jpg",
        "w": 600,
        "h": 450
      }
    ]
  },
  {
    "id": "2026-10-uw-workshop",
    "date": "Oct 2026",
    "title": "First U.S.–Japan Workshop on Advanced Composite Manufacturing",
    "place": "UW Advanced Composites Center, Seattle, USA",
    "photos": [
      {
        "src": "02.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "03.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "04.jpg",
        "w": 600,
        "h": 400
      },
      {
        "src": "05.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 450
      }
    ],
    "link": "https://www.uwacc.uw.edu/first-u-s-japan-workshop-on-advanced-composite-manufacturing"
  },
  {
    "id": "2026-09-asc",
    "date": "Sep 2026",
    "title": "ASC 41st Annual Technical Conference",
    "place": "Madison, Wisconsin, USA",
    "photos": [
      {
        "src": "04.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "05.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "02.jpg",
        "w": 600,
        "h": 800
      },
      {
        "src": "03.jpg",
        "w": 600,
        "h": 800
      }
    ]
  },
  {
    "id": "2026-03-graduation",
    "date": "Mar 2026",
    "title": "M.Eng. Graduation",
    "place": "Tohoku University, Sendai",
    "photos": [
      {
        "src": "01.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "02.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "04.jpg",
        "w": 600,
        "h": 800
      },
      {
        "src": "03.jpg",
        "w": 600,
        "h": 800
      }
    ]
  },
  {
    "id": "2026-03-jccm",
    "date": "Mar 2026",
    "title": "17th Japan Conference on Composite Materials (JCCM-17)",
    "place": "Ibaraki, Japan",
    "photos": [
      {
        "src": "04.jpg",
        "w": 600,
        "h": 338
      },
      {
        "src": "02.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "03.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 438
      }
    ]
  },
  {
    "id": "2025-10-asc-simulation-challenge",
    "date": "Oct 2025",
    "title": "ASC Student Simulation Challenge",
    "place": "American Society for Composites",
    "photos": [
      {
        "src": "02.jpg",
        "w": 600,
        "h": 652
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 573
      }
    ]
  },
  {
    "id": "2025-09-uw-visit",
    "date": "Sep 2025",
    "title": "Research Visit to the University of Washington",
    "place": "Seattle, USA",
    "photos": [
      {
        "src": "03.jpg",
        "w": 600,
        "h": 428
      },
      {
        "src": "14.jpg",
        "w": 600,
        "h": 800
      },
      {
        "src": "02.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "04.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "05.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "06.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "07.jpg",
        "w": 600,
        "h": 800
      },
      {
        "src": "08.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "13.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "09.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "10.jpg",
        "w": 600,
        "h": 800
      }
    ]
  },
  {
    "id": "2025-02-nus-visit",
    "date": "Feb 2025",
    "title": "Research Visit to the National University of Singapore",
    "place": "Singapore",
    "photos": [
      {
        "src": "03.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 800
      },
      {
        "src": "02.jpg",
        "w": 600,
        "h": 800
      }
    ]
  },
  {
    "id": "2025-01-aiaa-scitech",
    "date": "Jan 2025",
    "title": "AIAA SciTech Forum 2025",
    "place": "Orlando, Florida, USA",
    "photos": [
      {
        "src": "02.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "03.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "04.jpg",
        "w": 600,
        "h": 800
      },
      {
        "src": "07.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "05.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "06.jpg",
        "w": 600,
        "h": 800
      }
    ]
  },
  {
    "id": "2024-11-marathon",
    "date": "Nov 2024",
    "title": "Full Marathon",
    "place": "",
    "photos": [
      {
        "src": "02.jpg",
        "w": 600,
        "h": 800
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 800
      },
      {
        "src": "03.jpg",
        "w": 600,
        "h": 1299
      }
    ]
  },
  {
    "id": "2024-10-aircraft-symposium",
    "date": "Oct 2024",
    "title": "62nd Aircraft Symposium (JSASS)",
    "place": "Fukui, Japan",
    "photos": [
      {
        "src": "03.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "02.jpg",
        "w": 600,
        "h": 450
      }
    ]
  },
  {
    "id": "2024-07-boeing-externship",
    "date": "Jul 2024",
    "title": "Boeing Externship Program",
    "place": "",
    "photos": [
      {
        "src": "04.jpg",
        "w": 600,
        "h": 338
      },
      {
        "src": "06.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "01.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "05.jpg",
        "w": 600,
        "h": 338
      },
      {
        "src": "02.jpg",
        "w": 600,
        "h": 450
      },
      {
        "src": "03.jpg",
        "w": 600,
        "h": 450
      }
    ]
  },
  {
    "id": "2022-07-birdman-rally",
    "date": "Jul 2022",
    "title": "Birdman Rally 2022: Team Windnauts",
    "place": "Lake Biwa, Shiga",
    "sections": [
      {
        "title": "Before the Rally: Design & Build",
        "photos": [
          {
            "src": "01.jpg",
            "w": 600,
            "h": 399
          },
          {
            "src": "04.jpg",
            "w": 600,
            "h": 450
          },
          {
            "src": "05.jpg",
            "w": 600,
            "h": 450
          },
          {
            "src": "10.jpg",
            "w": 600,
            "h": 265
          },
          {
            "poster": "assets/video/2022-07-birdman-build-poster.jpg",
            "caption": "Building the wing ribs (2× speed)",
            "video": "assets/video/2022-07-birdman-build.mp4"
          },
          {
            "src": "02.jpg",
            "w": 600,
            "h": 800
          },
          {
            "src": "03.jpg",
            "w": 600,
            "h": 450
          },
          {
            "src": "06.jpg",
            "w": 600,
            "h": 450
          },
          {
            "src": "07.jpg",
            "w": 600,
            "h": 370
          },
          {
            "src": "08.jpg",
            "w": 600,
            "h": 399
          },
          {
            "src": "09.jpg",
            "w": 600,
            "h": 420
          },
          {
            "src": "11.jpg",
            "w": 600,
            "h": 333
          },
          {
            "src": "12.jpg",
            "w": 600,
            "h": 413
          }
        ]
      },
      {
        "title": "The Rally",
        "photos": [
          {
            "src": "13.jpg",
            "w": 600,
            "h": 400
          },
          {
            "src": "15.jpg",
            "w": 600,
            "h": 399
          },
          {
            "src": "14.jpg",
            "w": 600,
            "h": 450
          },
          {
            "src": "16.jpg",
            "w": 600,
            "h": 400
          },
          {
            "src": "17.jpg",
            "w": 600,
            "h": 450
          },
          {
            "src": "18.jpg",
            "w": 600,
            "h": 355
          }
        ]
      }
    ],
    "link": "https://www.ifs.tohoku.ac.jp/~Boeing/ppt/20230216/5_Windnauts_2021-22.pdf",
    "linkLabel": "Windnauts 2021–22 activity summary (PDF)"
  }
];
