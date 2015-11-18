define({ api: [
  {
    "type": "get",
    "url": "/v0.0.1/:api_key/:device_id/post.json?from_date=:from&to_date=:to&group_by=:range",
    "title": "Get Sensors Data",
    "name": "GetData",
    "group": "Data",
    "description": "Get data back from one device in order to do whatever you want. You can request data by a time range and even retrieve averages agregated by days or hours. Check the examples to learn more and remember you need a valid <code>api_key</code> you can obtain <a href=\"http://smartcitizen.me/users/dashboard\">here</a>.",
    "version": "0.0.1",
    "parameter": {
      "fields": [
        {
          "type": "String",
          "field": "api_key",
          "optional": false,
          "description": "User unique API Key. Obtain your key <a href=\"http://smartcitizen.me/users/dashboard\">here</a>."
        },
        {
          "type": "Number",
          "field": "device_id",
          "optional": false,
          "description": "Device unique ID."
        },
        {
          "type": "Date",
          "field": "from",
          "optional": true,
          "description": "Starting date <code>YYYY-MM-DD</code>. If not set gets a limit of 500 posts since the <code>to</code> date."
        },
        {
          "type": "Date",
          "field": "to",
          "optional": true,
          "description": "Finish date <code>YYYY-MM-DD</code>. If not set gets the current date."
        },
        {
          "type": "String[\"hour\",\"day\"]",
          "field": "range",
          "defaultValue": "hour",
          "optional": true,
          "description": "Get data averaged by a range."
        }
      ]
    },
    "success": {
      "fields": [
        {
          "type": "Json",
          "field": "device",
          "optional": false,
          "description": "Device information with the requested data posts."
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t {\n\t  \"device\": {\n\t    \"id\": \"24\",\n\t    \"title\": \"Pral2a\",\n\t    \"description\": \"Test\",\n\t    \"location\": \"Barcelona\",\n\t    \"city\": \"Barcelona\",\n\t    \"country\": \"Spain\",\n\t    \"exposure\": \"outdoor\",\n\t    \"elevation\": \"100.0\",\n\t    \"geo_lat\": \"41.383180\",\n\t    \"geo_long\": \"2.157960\",\n\t    \"created\": \"2013-04-24 18:09:05\",\n\t    \"last_insert_datetime\": \"2013-05-16 11:44:56\",\n\t    \"posts\": [\n\t      {\n\t        \"timestamp\": \"2013-05-01 19:46:51\",\n\t        \"temp\": 21.6,\n\t        \"hum\": 51.8,\n\t        \"co\": 131054,\n\t        \"no2\": 75121,\n\t        \"light\": 24.2,\n\t        \"noise\": 50,\n\t        \"bat\": 92.9,\n\t        \"panel\": 4.41,\n\t        \"nets\": 6,\n\t        \"insert_datetime\": \"2013-05-01 21:47:00\"\n\t      }\n\t    ]\n\t  }\n\t}\n"
        }
      ]
    },
    "examples": [
      {
        "title": "Return the last update of device 24:",
        "content": "   http://api.smartcitizen.me/v0.0.1/6e0428e19cf2bff1a9c05d14d0400bf4/41/posts.json\n"
      },
      {
        "title": "Return the last day average of device 24:",
        "content": "   http://api.smartcitizen.me/v0.0.1/6e0428e19cf2bff1a9c05d14d0400bf4/41/posts.json?group_by=day\n"
      },
      {
        "title": "Return all the data from May 2013 of device 24:",
        "content": "   http://api.smartcitizen.me/v0.0.1/6e0428e19cf2bff1a9c05d14d0400bf4/41/posts.json?from_date=2013-05-01&to_date=2013-05-31\n"
      },
      {
        "title": "Return all the data averaged per day from May 2013 of device 24:",
        "content": "   http://api.smartcitizen.me/v0.0.1/6e0428e19cf2bff1a9c05d14d0400bf4/41/posts.json?from_date=2013-05-01&to_date=2013-05-31&group_by=day\n"
      }
    ],
    "error": {
      "fields": [
        {
          "field": "invalidAPIKEY",
          "optional": false,
          "description": "Check on your platform profile you are using a valid <code>API KEY</code>."
        }
      ],
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"Feed do not exist. Data not available\"\n   }\n"
        }
      ]
    },
    "filename": "./getdata.php"
  },
  {
    "type": "get",
    "url": "/v0.0.1/:api_key/lastpost.json",
    "title": "Get Latest Data",
    "name": "GetLastData",
    "group": "Data",
    "description": "Get back the latest updates from a user devices in order to do whatever you want. Check the examples to learn more and remember you need a valid <code>api_key</code> you can obtain <a href=\"http://smartcitizen.me/users/dashboard\">here</a>.",
    "version": "0.0.1",
    "parameter": {
      "fields": [
        {
          "type": "String",
          "field": "api_key",
          "optional": false,
          "description": "User unique API Key. Obtain your key <a href=\"http://smartcitizen.me/users/dashboard\">here</a>."
        }
      ]
    },
    "success": {
      "fields": [
        {
          "type": "Json",
          "field": "device",
          "optional": false,
          "description": "Device information with the requested data posts."
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t {\n\t  \"device\": {\n\t    \"id\": \"24\",\n\t    \"title\": \"Pral2a\",\n\t    \"description\": \"Test\",\n\t    \"location\": \"Barcelona\",\n\t    \"city\": \"Barcelona\",\n\t    \"country\": \"Spain\",\n\t    \"exposure\": \"outdoor\",\n\t    \"elevation\": \"100.0\",\n\t    \"geo_lat\": \"41.383180\",\n\t    \"geo_long\": \"2.157960\",\n\t    \"created\": \"2013-04-24 18:09:05\",\n\t    \"last_insert_datetime\": \"2013-05-16 11:44:56\",\n\t    \"posts\": [\n\t      {\n\t        \"timestamp\": \"2013-05-01 19:46:51\",\n\t        \"temp\": 21.6,\n\t        \"hum\": 51.8,\n\t        \"co\": 131054,\n\t        \"no2\": 75121,\n\t        \"light\": 24.2,\n\t        \"noise\": 50,\n\t        \"bat\": 92.9,\n\t        \"panel\": 4.41,\n\t        \"nets\": 6,\n\t        \"insert_datetime\": \"2013-05-01 21:47:00\"\n\t      }\n\t    ]\n\t  }\n\t}\n"
        }
      ]
    },
    "examples": [
      {
        "title": " Request:",
        "content": "   http://api.smartcitizen.me/v0.0.1/6e0428e19cf2bff1a9c05d14d0400bf4/lastpost.json\n"
      }
    ],
    "error": {
      "fields": [
        {
          "field": "invalidAPIKEY",
          "optional": false,
          "description": "Check on your platform profile you are using a valid <code>API KEY</code>."
        }
      ],
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"Feed do not exist. Data not available\"\n   }\n"
        }
      ]
    },
    "filename": "./lastdata.php"
  },
  {
    "type": "get",
    "url": "/v0.0.1/:api_key/me.json",
    "title": "Get User Info",
    "name": "GetUserInfo",
    "group": "Users",
    "description": "Get back all the information about a user in order to do whatever you want. Check the examples to learn more and remember you need a valid <code>api_key</code> you can obtain <a href=\"http://smartcitizen.me/users/dashboard\">here</a>.",
    "version": "0.0.1",
    "parameter": {
      "fields": [
        {
          "type": "String",
          "field": "api_key",
          "optional": false,
          "description": "User unique API Key. Obtain your key <a href=\"http://smartcitizen.me/users/dashboard\">here</a>."
        }
      ]
    },
    "success": {
      "fields": [
        {
          "type": "Json",
          "field": "me",
          "optional": false,
          "description": "User information."
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"me\": {\n    \"id\": \"5\",\n    \"username\": \"Guillem\",\n    \"city\": \"Barcelona\",\n    \"country\": \"Spain\",\n    \"website\": \"\",\n    \"email\": \"g8i113m@gmail.com\",\n    \"created\": \"2013-04-23 00:34:13\",\n    \"devices\": [\n      {\n        \"id\": \"24\",\n        \"title\": \"Pral2a\",\n        \"description\": \"Test\",\n        \"location\": \"Barcelona\",\n        \"city\": \"Barcelona\",\n        \"country\": \"Spain\",\n        \"exposure\": \"outdoor\",\n        \"elevation\": \"100.0\",\n        \"geo_lat\": \"41.383180\",\n        \"geo_long\": \"2.157960\",\n        \"created\": \"2013-04-24 18:09:05\",\n        \"last_insert_datetime\": \"2013-05-16 11:44:56\"\n      }\n    ]\n  }\n}\n"
        }
      ]
    },
    "examples": [
      {
        "title": "Request:",
        "content": "   http://api.smartcitizen.me/v0.0.1/6e0428e19cf2bff1a9c05d14d0400bf4/me.json\n"
      }
    ],
    "error": {
      "fields": [
        {
          "field": "invalidAPIKEY",
          "optional": false,
          "description": "Check on your platform profile you are using a valid <code>API KEY</code>."
        }
      ],
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"Feed do not exist. Data not available\"\n   }\n"
        }
      ]
    },
    "filename": "./me.php"
  },
  {
    "type": "get",
    "url": "/api/:api_key/devices.json",
    "title": "Get Devices Info (BETA)",
    "name": "GetDevicesInfo",
    "group": "Devices",
    "description": "Get back all the devices on the platform in order to do whatever you want. This query is currently limited to selected <code>api_key</code> users, contact <a href=\"mailto:support@smartcitizen.me\">support</a> in order to get a BETA key. Check the examples to learn more.",
    "version": "0.0.1",
    "parameter": {
      "fields": [
        {
          "type": "String",
          "field": "api_key",
          "optional": false,
          "description": "User unique API Key. Obtain your key <a href=\"http://smartcitizen.me/users/dashboard\">here</a>."
        }
      ]
    },
    "success": {
      "fields": [
        {
          "type": "Json",
          "field": "devices",
          "optional": false,
          "description": "User information."
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"devices\": [\n      {\n        \"id\": \"24\",\n        \"title\": \"Pral2a\",\n        \"description\": \"Test\",\n        \"location\": \"Barcelona\",\n        \"city\": \"Barcelona\",\n        \"country\": \"Spain\",\n        \"exposure\": \"outdoor\",\n        \"elevation\": \"100.0\",\n        \"geo_lat\": \"41.383180\",\n        \"geo_long\": \"2.157960\",\n        \"created\": \"2013-04-24 18:09:05\",\n        \"last_insert_datetime\": \"2013-05-16 11:44:56\"\n      }\n    ]\n}\n"
        }
      ]
    },
    "examples": [
      {
        "title": "Request:",
        "content": "http://api.smartcitizen.me/v0.0.1/6e0428e19cf2bff1a9c05d14d0400bf4/devices.json\n"
      }
    ],
    "error": {
      "fields": [
        {
          "field": "invalidAPIKEY",
          "optional": false,
          "description": "Check on your platform profile you are using a valid <code>API KEY</code>."
        },
        {
          "field": "unauthorizedAPIKEY",
          "optional": false,
          "description": "Contact <a href=\"mailto:support@smartcitizen.me\">support</a> in order to check you have a valid <code>API KEY</code>."
        }
      ],
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"Feed do not exist. Data not available\"\n   }\n"
        }
      ]
    },
    "filename": "./devices.php"
  }
] });