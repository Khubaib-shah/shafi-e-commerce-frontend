import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function MyModal({ isOpen, setIsOpen }) {
  function close() {
    setIsOpen(false);
  }
  setTimeout(() => {
    setIsOpen(false);
  }, 4000);
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-[2px] xl">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl border p-6          backdrop-blur-1xl duration-300 ease-out data-[closed]:transform-scale(95%) data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                Bundle Created Successfully
              </DialogTitle>
              <p className="mt-2 text-sm/6">
                The new bundle has been added to your inventory.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-blue-700 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
