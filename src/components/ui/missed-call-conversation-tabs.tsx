'use client';

import { useState } from 'react';

type Direction = 'incoming' | 'outgoing';

interface Bubble {
  direction: Direction;
  text: string;
}

interface Conversation {
  id: string;
  trade: string;
  context: string;
  bubbles: Bubble[];
  annotation: string;
}

const conversations: Conversation[] = [
  {
    id: 'hvac',
    trade: 'HVAC',
    context: 'Residential, weekday afternoon',
    bubbles: [
      {
        direction: 'incoming',
        text: "Hi, this is Mike's Heating and Cooling. Sorry we missed your call. What can we help with?"
      },
      {
        direction: 'outgoing',
        text: 'Furnace stopped working. House is cold. Need someone today if possible.'
      },
      {
        direction: 'incoming',
        text: 'Got it. Can you confirm the service address and the make of the furnace if you know it? Same-day call-out today is $129, applied to the repair if we fix it.'
      },
      {
        direction: 'outgoing',
        text: "412 Oak Cres, Whitby. It's a Lennox, maybe 8 years old."
      },
      {
        direction: 'incoming',
        text: "Thanks. We have a tech that can be there between 2 and 4 today. I will send a confirmation text once the dispatcher locks it in. We'll also send a tracking link when the tech is on the way."
      }
    ],
    annotation:
      "In about ninety seconds, your dispatcher receives a job draft with the address, equipment type, requested window, and the customer's exact words. Nobody had to be at a desk for any of this to happen."
  },
  {
    id: 'plumbing',
    trade: 'Plumbing',
    context: 'Residential, Saturday 9pm',
    bubbles: [
      {
        direction: 'incoming',
        text: "Hi, this is Westside Plumbing. We missed your call. We do answer after-hours emergencies. What's going on?"
      },
      {
        direction: 'outgoing',
        text: 'Pipe burst under the kitchen sink. Water everywhere. Shut off the main.'
      },
      {
        direction: 'incoming',
        text: 'Good move shutting off the main. Address please, and is there a way for our tech to access the property tonight?'
      },
      {
        direction: 'outgoing',
        text: '88 Birchwood Ave, Mississauga. Yes, we are home.'
      },
      {
        direction: 'incoming',
        text: 'We have an on-call tech available now. After-hours dispatch is $185 plus parts and labor. He can be there within 60 minutes. Should I send him?'
      },
      { direction: 'outgoing', text: 'Yes please.' },
      {
        direction: 'incoming',
        text: 'Booked. The tech will text you when he is on the way. Mop up what you can with towels, do not try to turn the water back on until we get there.'
      }
    ],
    annotation:
      'After-hours emergencies are the highest-margin calls a plumber gets, and the calls most likely to be lost. The system books, confirms, and notifies the on-call tech without anyone in the office picking up the phone. The customer is reassured. The tech gets the address and the situation. The job is locked.'
  },
  {
    id: 'roofing',
    trade: 'Roofing',
    context: 'Commercial, weekday morning during a storm',
    bubbles: [
      {
        direction: 'incoming',
        text: "Hi, this is Northern Roofing. We're slammed today with storm calls. Sorry we missed you. What's the situation?"
      },
      {
        direction: 'outgoing',
        text: 'Office building, water coming through ceiling tiles in two spots. Need it stopped today.'
      },
      {
        direction: 'incoming',
        text: 'Understood. Address, building access contact, and is the leak active right now or have you been able to slow it?'
      },
      {
        direction: 'outgoing',
        text: '1240 Industrial Blvd, Brampton. Building manager is Sarah, 416-555-0182. Active, but we put buckets down.'
      },
      {
        direction: 'incoming',
        text: 'We have a tarp crew that can be there this afternoon for emergency containment. Permanent repair will be quoted after inspection. Estimator can also be on-site for the assessment. Sound good?'
      },
      { direction: 'outgoing', text: 'Yes, send them.' },
      {
        direction: 'incoming',
        text: "Thanks. You'll get a confirmation from our dispatcher within 30 minutes with arrival time and crew names. Sarah will get a separate text with the same info."
      }
    ],
    annotation:
      'Commercial storm calls are won by the contractor who locks the appointment first. This conversation took less than four minutes, captured a building manager contact, sent the right crew type, and told the right person at the building they were coming, all before the office staff had finished the call they were already on.'
  }
];

export function MissedCallConversationTabs() {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const active = conversations.find((c) => c.id === activeId) ?? conversations[0];

  return (
    <div>
      <div role="tablist" aria-label="Conversation by trade" className="flex flex-wrap gap-2">
        {conversations.map((conversation) => {
          const selected = conversation.id === activeId;
          return (
            <button
              key={conversation.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`conv-panel-${conversation.id}`}
              id={`conv-tab-${conversation.id}`}
              onClick={() => setActiveId(conversation.id)}
              className={[
                'cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition',
                selected
                  ? 'border-[var(--color-terracotta)] bg-[var(--color-terracotta)] text-white'
                  : 'border-[var(--color-border-strong)] bg-white text-[var(--color-navy)] hover:border-[var(--color-navy)]'
              ].join(' ')}
            >
              {conversation.trade}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`conv-panel-${active.id}`}
        aria-labelledby={`conv-tab-${active.id}`}
        className="mt-8 grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start"
      >
        <div className="rounded-md border border-[var(--color-border)] bg-white p-5 sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
            {active.trade}, {active.context}
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {active.bubbles.map((bubble, index) => (
              <li
                key={index}
                className={
                  bubble.direction === 'outgoing'
                    ? 'self-end max-w-[85%] rounded-2xl bg-[var(--color-navy)] px-4 py-2.5 text-[14px] leading-snug text-white'
                    : 'self-start max-w-[85%] rounded-2xl bg-[#E5E7EB] px-4 py-2.5 text-[14px] leading-snug text-[var(--color-charcoal)]'
                }
              >
                {bubble.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md bg-[var(--color-stone)] p-6 sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
            What just happened
          </p>
          <p className="mt-4 text-[var(--color-charcoal)]">{active.annotation}</p>
        </div>
      </div>
    </div>
  );
}
