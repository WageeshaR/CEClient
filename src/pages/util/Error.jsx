import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
        id="error-page"
        class="flex flex-col h-screen w-screen bg-slate-100 text-center align-center"
    >
      <div class="m-auto font-sans">
        <div class="text-2xl">Oops!</div>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}