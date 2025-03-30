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
      size={size ?? "lg"}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content rounded={".5rem"} py="2rem" px="1.5rem" m=".2rem">
            <Dialog.Header>
              <Dialog.Title mb="1.5rem">{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{children}</Dialog.Body>
            {cta && (
              <Dialog.Footer mt="2rem">
                <Button
                  variant={"outline"}
                  border={"1px solid #007AFF"}
                  color="#007AFF"
                  bg="white"
                  onClick={onOpenChange}
                  fontSize={".9rem"}
                >
                  Cancel
                </Button>
                <Button onClick={onOpenChange} fontSize={".9rem"}>
                  Save
                </Button>
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
