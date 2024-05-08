import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import {FakerListModel} from "../pages/faker-list/models/faker-list.model.ts";
import {useFakerList} from "../pages/faker-list/hooks/useFakerList.tsx";
import FakerList from "../pages/faker-list/FakerList.tsx";
import {BrowserRouter} from "react-router-dom";



jest.mock("../pages/faker-list/hooks/useFakerList");

describe("FakerList component", () => {
  beforeEach(() => {
    const fakeData: FakerListModel[] = [
      { id: "ABC", name: "Faker 1", avatar: "avatar1.png", createdAt: new Date() },
      { id: "ACB", name: "Faker 2", avatar: "avatar2.png", createdAt: new Date() },
    ];

    (useFakerList as jest.Mock).mockReturnValue({
      fakerList: fakeData,
      isLoading: false,
      navigate: jest.fn(),
    });
  });

  test("renders Faker List title", () => {
    render(<BrowserRouter><FakerList /></BrowserRouter>);
    const titleElement = screen.getByText("Faker List");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders list items when data is loaded", () => {
    render(<BrowserRouter><FakerList /></BrowserRouter>);
    const item1 = screen.getByText("Faker 1");
    const item2 = screen.getByText("Faker 2");
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  test("calls navigate function when back button is clicked", () => {
    render(<BrowserRouter><FakerList /></BrowserRouter>);
    const backButton = screen.getByTestId("go-back");
    fireEvent.click(backButton);
    expect(useFakerList().navigate).toHaveBeenCalledWith(-1);
  });
});
