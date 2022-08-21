export const getImgSrc = (imgStr: string): string => {
    const result = imgStr?.split("\"")?.find((e) => e?.includes("://")) ?? "";
    return result;
}

export const getItem = (item: any): any => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    imgSrc: getImgSrc(item.description),
    shortDescription: item["content:encoded"],
    enclosure: item.enclosure,
});

export const rssResponseMapper = (data: any, category?: string): any => {
    if (!data) return null;

    return {
        title: data.rss.channel.title,
        description: data.rss.channel.description,
        link: data.rss.channel.link,
        image: data?.rss?.channel?.image || null,
        language: data?.rss?.channel?.language || 'id',
        copyright: data?.rss?.channel?.copyright || '',
        category: data?.rss?.channel?.category || category,
        lastBuildDate: data.rss.channel.lastBuildDate,
        items: data.rss.channel.item.map((i: any) => getItem(i)),
    };
}
