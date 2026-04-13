#!/usr/bin/env python3
"""Module for creating a tuple from a string and the square of a number."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of string k and the square of int/float v."""
    return (k, v ** 2)
