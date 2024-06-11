export type AvatarProps = {
  src: string;
  altText?: string;
};

export default function Avatar({ src, altText = " " }: AvatarProps) {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={src} alt={altText} />
      </div>
    </div>
  );
}

Avatar.displayName = "Avatar";
