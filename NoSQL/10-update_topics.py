#!/usr/bin/env python3
"""Module for updating topics of a school in a MongoDB collection."""


def update_topics(mongo_collection, name, topics):
    """Update all topics of a school document based on the name.

    Args:
        mongo_collection: the pymongo collection object.
        name: the school name to update.
        topics: list of topics to set for the school.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
