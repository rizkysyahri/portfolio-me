import { useHydration } from "@/hooks/useHydration";
import { formatDate, formatTime } from "@/libs/format";
import { Suspense } from "react";

type Props = React.ComponentProps<"time"> & {
  date: Date | string | number;
  hydratedSuffix?: React.ReactNode;
};

export function LocalDateTime({
  date,
  separator = ", ",
  hydratedSuffix = null,
  ...props
}: Props & {
  separator?: string;
}) {
  const iso = new Date(date).toISOString();
  const hydrated = useHydration();
  return (
    <Suspense key={hydrated ? "local" : "utc"}>
      <time dateTime={iso} title={iso} {...props}>
        {formatDate(date)}
        {separator}
        {formatTime(date)}
        {hydrated ? hydratedSuffix : " (UTC)"}
      </time>
    </Suspense>
  );
}
