import { render, screen } from "@testing-library/react"

import "@testing-library/jest-dom"
import App from "./App"
import { expect, test } from "vitest"


test("render app", () => {
    render(<App />)
    expect(screen.getByRole("heading", { name: /welcome to reaact/i })).toBeInTheDocument()
}
    )