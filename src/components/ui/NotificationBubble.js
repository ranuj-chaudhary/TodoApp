const notificationBubbleStyle = {
  style: `rounded-full w-6 h-6 ml-2 text-xs font-bold flex justify-center items-center`,
};

export default function NotificationBubble({ totalTask, backgroundColor }) {
  return (
    <div
      className={`${totalTask > 0 ? backgroundColor : ''} ${
        notificationBubbleStyle.style
      } `}
    >
      {totalTask > 0 ? totalTask : ''}
    </div>
  );
}
