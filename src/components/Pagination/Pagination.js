import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DOTS, usePagination } from 'hooks/usePagination';
import {
  Arrow,
  PaginationContainer,
  PaginationItem,
} from './Pagination.styled';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer className={classnames({ [className]: className })}>
      <PaginationItem
        className={classnames({
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <Arrow className="left" />
      </PaginationItem>

      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem key={pageNumber} className=" dots">
              &#8230;
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            key={pageNumber}
            className={classnames({
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        className={classnames({
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <Arrow className="right" />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string,
};
