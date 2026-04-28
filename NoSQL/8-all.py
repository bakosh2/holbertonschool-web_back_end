#!/usr/bin/env python3
"""Module for listing all documents in a MongoDB collection."""


def list_all(mongo_collection):
    """List all documents in a collection.

    Args:
        mongo_collection: the pymongo collection object.

    Returns:
        A list of all documents, or empty list if none exist.
    """
    return list(mongo_collection.find())
