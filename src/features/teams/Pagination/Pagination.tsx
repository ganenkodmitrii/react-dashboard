import { useMemo } from 'react';
import { Button, Space } from 'ebs-design';
import { Properties } from 'types/common';

interface PaginationProps {
  filters: Properties;
  count?: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  onClickPrev,
  onClickNext,
  filters,
  count = 0,
}) => {
  const pageEnd = useMemo(() => filters.page >= Math.ceil(count / filters.limit), [filters, count]);

  return (
    <Space className="mt-20" justify="space-between">
      <Space className="ml-5">Page number: {filters.page}</Space>
      <Space>
        <Button onClick={() => onClickPrev()} disabled={filters.page === 1 ? true : false}>
          Previous Page
        </Button>
        <Button onClick={() => onClickNext()} disabled={!pageEnd}>
          Next Page
        </Button>
      </Space>
    </Space>
  );
};
export default Pagination;
