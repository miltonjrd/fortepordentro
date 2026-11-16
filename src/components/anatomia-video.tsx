type AnatomiaVideoProps = {
  src: string;
  poster: string;
  title: string;
};

export function AnatomiaVideo({ src, poster, title }: AnatomiaVideoProps) {
  return (
    <figure className="mx-auto mt-8 w-full max-w-sm">
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="none"
        aria-label={title}
        className="aspect-[9/16] w-full rounded-lg bg-card object-contain shadow-sm"
      />
    </figure>
  );
}