import React from "react";
import { useQuery } from "react-query";
import { BlogPageBlock, WagtailClient } from "../api/wagtail-client";


interface Props<T extends BlogPageBlock = BlogPageBlock> {
  block: BlogPageBlock
}
export function BlogPageBlockDetail({block}: Props) {

  const blockMap: Record<string, React.ComponentType<Props>> = {
    'image': ImageBlock,
    'rich_text': RichTextBlock,
    'heading': HeadingBlock,
  }

  const Block = blockMap[block.type] ?? DefaultBlock

  return <Block block={block}></Block>
}

export function ImageBlock({block}: Props) {
  const wagtail = new WagtailClient()
  const {data, isLoading, isError} = useQuery(['load-image', block.id], async ()=>{
    wagtail.axios.get('/api/v2')
  })
  return <></>
}
export function RichTextBlock({block}: Props) {
  return <div dangerouslySetInnerHTML={{__html: block.value}}></div>
}
export function HeadingBlock({block}: Props) {return <></>}
export function DefaultBlock({block}: Props) {return <></>}