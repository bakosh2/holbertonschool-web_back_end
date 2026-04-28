#!/usr/bin/env python3
"""Module for simple pagination of a dataset using page and page_size parameters."""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return a tuple containing a start index and an end index corresponding
    to the range of indexes to return in a list for the given pagination
    parameters. Page numbers are 1-indexed, meaning the first page is page 1.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the Server instance with an empty dataset cache."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Return the cached dataset, loading it from the CSV file if needed."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return the correct page of the dataset based on page and page_size.

        Args:
            page: the page number to retrieve, must be a positive integer.
            page_size: the number of items per page, must be a positive integer.

        Returns:
            A list of rows corresponding to the requested page of the dataset.
            Returns an empty list if the page is out of range.
        """
        assert isinstance(page, int) and page > 0, \
            "page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, \
            "page_size must be a positive integer"

        start, end = index_range(page, page_size)
        dataset = self.dataset()

        if start >= len(dataset):
            return []

        return dataset[start:end]
