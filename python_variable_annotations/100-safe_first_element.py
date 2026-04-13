#!/usr/bin/env python3
"""Module for safely retrieving the first element of a sequence."""
from typing import Any, Optional, Sequence


def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """Return the first element of lst, or None if lst is empty."""
    if lst:
        return lst[0]
    else:
        return None
