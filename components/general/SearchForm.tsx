import { Search } from "lucide-react";
import * as motion from "motion/react-client";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
export default function SearchForm({
  query,
}: {
  readonly query: string | undefined;
}) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
    >
      <Form action={"/projects"} scroll={false} className="search-form">
        <input
          type="text"
          name="query"
          defaultValue={query}
          className="search-input"
          placeholder="Search Projects"
        />
        <div className="flex gap-2">
          {query && <SearchFormReset />}

          <button
            aria-label="Search"
            type="submit"
            className="search-btn text-white"
          >
            <Search className="size-5" />
          </button>
        </div>
      </Form>
    </motion.div>
  );
}
