import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function VideoPlay({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="p-0 max-w-full w-auto border-none rounded-3xl overflow-hidden shadow-xl bg-transparent ">
        <iframe
          width="860"
          height="483"
          src="https://www.youtube.com/embed/WVQ8ffgws28?si=sEHkpCt8Jux4kqrB"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
          allowFullScreen
          className="md:w-[859px] md:h-[483px] w-[350px] h-[197px] rounded-3xl overflow-hidden bg-black border border-black "
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}

export default VideoPlay;
