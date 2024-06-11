import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../Modal";

describe("Modal Component", () => {
  const sampleChildren = <div>Modal Content</div>;

  it("should render correctly when isOpen is true", () => {
    const { asFragment } = render(
      <Modal isOpen={true} onClose={() => {}}>
        {sampleChildren}
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should not render when isOpen is false", () => {
    const { asFragment } = render(
      <Modal isOpen={false} onClose={() => {}}>
        {sampleChildren}
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        {sampleChildren}
      </Modal>
    );
    fireEvent.click(screen.getByRole("close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
