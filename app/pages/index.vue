<script setup lang="ts">
import profile from "~/assets/landing/png/jba.jpg";
import gradient from "~/assets/landing/svg/gradient-stroke.svg";
import github from "~/assets/landing/svg/github-01.svg";
import linkedin from "~/assets/landing/svg/linkedin-01.svg";
import mail from "~/assets/landing/svg/mail-01.svg";
import whatsapp from "~/assets/landing/svg/whatsapp.svg";
import brownbrick from "~/assets/landing/svg/brownbrick.svg";
import ArrowStroke from "~/components/ArrowStroke.vue";

definePageMeta({
  title: "jawadbinazam",
});

const socials = [
  {
    icon: mail,
    label: "Mail",
    link: "mailto:abidibnazam@gmail.com",
  },
  {
    icon: linkedin,
    label: "Linkedin",
    link: "",
  },
  {
    icon: whatsapp,
    label: "Whatsapp",
    link: "",
  },
  {
    icon: github,
    label: "Github",
    link: "",
  },
];
</script>
<template>
  <LayoutsContainer>
    <div class="mt-22 relative">
      <img :src="gradient" alt="magic gradient" class="absolute top-0 magic" />
      <div>
        <div
          class="p-[5px] rounded-[16px] border border-slate-200 w-fit -rotate-5"
        >
          <img
            height="100"
            width="100"
            class="rounded-[12px] object-fit"
            :src="profile"
            alt="jawadbinazam"
          />
        </div>
        <h1 class="text-[32px] font-instrument mt-[10px]">Jawad Bin Azam</h1>
      </div>
      <div class="description">
        <h1 class="font-inter mt-[10px] font-normal">
          <span class="text-[#000000B8]"> Developer with Design Sense.</span> I
          build apps <span class="text-[#000000B8]">[web/mobile]</span> that are
          aesthetically pleasant with great UX.
          <span class="text-[#000000B8]"
            >Am I Full Stack? well, I’ve that badge too!</span
          >
        </h1>
        <p
          class="mt-[17px] font-normal fonr-inter text-[#0C0C0C] leading-[22.425px]"
        >
          I love both design and development..most importantly I care about
          great user experience. Always kneen to learn new things and exciting
          opportunities.
        </p>
      </div>
      <div class="my-[30px] flex flex-row gap-x-5">
        <img
          class="shadowicon"
          v-for="value in socials"
          :src="value.icon"
          :alt="value.label"
        />
      </div>
    </div>
  </LayoutsContainer>
  <LayoutsContainer>
    <h1 class="font-inter text-[18px] font-normal section-header">
      Experience
    </h1>
    <div class="mt-6 font-inter flex flex-col gap-y-4">
      <div class="flex items-end gap-x-5">
        <div class="flex gap-x-[6px] min-w-[200px]">
          <img :src="brownbrick" alt="brownbrick company" />
          <div>
            <h1 class="text-[16px] font-normal">Brownbrick.io</h1>
            <p class="text-[10px] font-normal text-[#141B34B2] w-[170px]">
              Front-End Engineer
              <span
                class="inline-block w-2 h-2 rounded-full bg-yellow-400 idle-animation"
              ></span>
            </p>
          </div>
        </div>
        <div class="pb-2">
          <ArrowStroke />
        </div>
        <div class="flex flex-row items-center gap-x-1">
          <h1 class="text-[10px] font-normal">Mar/2024</h1>
          <span class="font-normal">-</span>
          <h1 class="text-[10px] font-normal">Now</h1>
        </div>
      </div>
      <div class="flex items-end gap-x-5">
        <div class="flex gap-x-[6px] min-w-[200px]">
          <Anilon />
          <div>
            <h1 class="text-[16px] font-normal">Anilon Devs</h1>
            <p class="text-[10px] font-normal text-[#141B34B2] w-[170px]">
              Full-Stack Founding Engineer
              <span
                class="inline-block w-2 h-2 rounded-full bg-green-400 active-animation"
              ></span>
            </p>
          </div>
        </div>
        <div class="pb-2">
          <ArrowStroke />
        </div>
        <div class="flex flex-row items-center gap-x-1">
          <h1 class="text-[10px] font-normal">Oct/2024</h1>
          <span class="font-normal">-</span>
          <h1 class="text-[10px] font-normal">Now</h1>
        </div>
      </div>
    </div>
  </LayoutsContainer>
</template>
<style scoped lang="css">
.magic {
  width: 797.5px;
  height: 344px;
  flex-shrink: 0;
}
.shadowicon {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25));
}
.section-header {
  color: rgba(0, 0, 0, 0.65);
  text-shadow: 0 4px 50px rgba(0, 0, 0, 0.15);
}
.idle-animation {
  animation: blink 5s ease-in-out infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  30% {
    opacity: 0.2;
  }
}

.active-animation {
  animation: blink 2s ease-in-out infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  30% {
    opacity: 0.2;
  }
}
</style>
