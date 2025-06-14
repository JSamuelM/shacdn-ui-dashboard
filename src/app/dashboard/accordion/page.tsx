import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern."
  },
  {
    id: "item-2",
    question: "How do I get started?",
    answer: "You can start by reading the documentation.",
  },
  {
    id: "item-3",
    question: "Can I use it on mutiple projects?",
    answer: "Yes. It's licensed under MIT license",
  },
]

export default function Page() {
  return (
    <div>
      <Accordion
        type="single"
        className="w-full"
        value="item-1"
      >
        {
          items.map(item => (
            <AccordionItem key={ item.id } value={ item.id }>
              <AccordionTrigger>{ item.question }</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                { item.answer }
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  );
}