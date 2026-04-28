#!/usr/bin/env python3
"""Module for simple pagination helper function."""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple containing start and end indexes for pagination.
    Page numbers are 1-indexed, meaning the first page is page 1.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
