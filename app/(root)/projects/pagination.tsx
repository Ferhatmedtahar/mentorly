"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Create a new URLSearchParams instance to modify
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Calculate start and end of middle pages
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if at the beginning
      if (currentPage <= 3) {
        endPage = 4;
      }

      // Adjust if at the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push("ellipsis1");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("ellipsis2");
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-4 mb-4">
      <Button
        // variant="outline"
        size="icon"
        onClick={() => router.push(createPageURL(currentPage - 1))}
        disabled={currentPage <= 1}
        className="bg-primary-500 hover:bg-primary/90"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pageNumbers.map((page, index) => {
        if (page === "ellipsis1" || page === "ellipsis2") {
          return (
            <Button
              key={`ellipsis-${index}`}
              variant="ghost"
              size="icon"
              disabled
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          );
        }

        return (
          <Button
            key={page}
            className="hover:bg-primary-300 cursor-pointer"
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => router.push(createPageURL(page))}
          >
            {page}
          </Button>
        );
      })}

      <Button
        // variant="outline"
        size="icon"
        onClick={() => router.push(createPageURL(currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="bg-primary-500 hover:bg-primary/90"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
