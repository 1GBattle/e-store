"use client";

import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
} from "@/app/redux/error.api";

export default function AboutPage() {
  const [test400Error] = useLazyGet400ErrorQuery();
  const [test500Error] = useLazyGet500ErrorQuery();
  const [test401Error] = useLazyGet401ErrorQuery();
  return (
    <div>
      <h1>This is the about page</h1>

      <button
        className="outline outline-cyan-300"
        onClick={() => test400Error()}
      >
        Test 404 Error
      </button>
      <button
        className="outline outline-cyan-300"
        onClick={() => test401Error()}
      >
        Test 401 Error
      </button>
      <button
        className="outline outline-cyan-300"
        onClick={() => test500Error()}
      >
        Test 500 Error
      </button>
      <button
        className="outline outline-cyan-300"
        onClick={() => test400Error()}
      >
        Test 404 Error
      </button>
    </div>
  );
}
