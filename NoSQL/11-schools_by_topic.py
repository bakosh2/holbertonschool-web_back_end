#!/usr/bin/env python3
""" returns the list of schools having a specific topic """


def schools_by_topic(mongo_collection, topic):
    """ returns list of schools with a specific topic """
    return list(mongo_collection.find({"topics": topic}))
