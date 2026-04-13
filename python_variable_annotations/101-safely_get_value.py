#!/usr/bin/env python3
"""Module for safely retrieving a value from a mapping."""
from typing import Any, Mapping, Optional, TypeVar, Union

T = TypeVar('T')


def safely_get_value(
        dct: Mapping, key: Any, default: Optional[T] = None
) -> Union[Any, T]:
    """Return the value for key in dct, or default if key is not found."""
    if key in dct:
        return dct[key]
    else:
        return default
