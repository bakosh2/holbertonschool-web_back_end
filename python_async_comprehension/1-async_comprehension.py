#!/usr/bin/env python3
"""Module for collecting random numbers using async comprehension."""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random floats from async_generator and return them."""
    return [i async for i in async_generator()]
