#!/usr/bin/env python3
"""Module for summing a mixed list of integers and floats."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of all integers and floats in mxd_lst as a float."""
    return float(sum(mxd_lst))
