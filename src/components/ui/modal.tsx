import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import Button from "../button";
// import Button from "../button";

interface ModalProps {
  open: boolean;
  onOpenChange: () => void;
  title?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xs" | "cover" | "full";
  cta?: boolean;
}

const Modal = ({
  open,
  onOpenChange,
  title,
  children,
  size,
  cta,
}: ModalProps) => {
  return (
    <Dialog.Root
      lazyMount
      open={open}
      onOpenChange={onOpenChange}
      placement={"center"}
      size={size}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content rounded={"2rem"}>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{children}</Dialog.Body>
            {cta && (
              <Dialog.Footer>
                <Button
                  variant={"outline"}
                  border={"1px solid #007AFF"}
                  bg="white"
                  onClick={onOpenChange}
                >
                  Cancel
                </Button>
                <Button onClick={onOpenChange}>Save</Button>
              </Dialog.Footer>
            )}
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
