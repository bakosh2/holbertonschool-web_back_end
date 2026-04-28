#!/usr/bin/env python3
"""provides stats about nginx logs stored in MongoDB"""

from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    print(f"{collection.count_documents({})} logs")
    print("Methods:")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for m in methods:
        print("\tmethod {}: {}".format(
            m,
            collection.count_documents({"method": m})
        ))

    print("{} status check".format(
        collection.count_documents({
            "method": "GET",
            "path": "/status"
        })
    ))
