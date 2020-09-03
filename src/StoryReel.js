import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/09/34/28/0934289788b7f51c4da24b96817590b5.jpg"
        profileSrc="https://www.maybelline.com/~/media/mny/us/maybelline-girls/gigi-hadid/half-width-image/gigi-hadid-profile-image-3x4_.jpg?h=666&w=500&la=en-US&hash=CD04A621E9BA4FE27EEB08FC0CADD86B8770BCB7"
        title="Gigi Hadid"
      />
      <Story
        image="https://pbs.twimg.com/media/D9k3_jrW4AEqM3S.jpg"
        profileSrc="https://static.billboard.com/files/media/Selena-Gomez-press-by-Ashley-Osborn-2020-billboard-1548-1024x677.jpg"
        title="Selena Gomez"
      />
      <Story
        image="https://i.ytimg.com/vi/eEhTQnVBBUY/maxresdefault.jpg"
        profileSrc="https://pbs.twimg.com/media/EG64ChpXYAEK7Bo.jpg"
        title="Tucker Budzyn"
      />
      <Story
        image="https://i.pinimg.com/736x/c1/9a/ac/c19aaccbaed1fd408872390fae75584a.jpg"
        profileSrc="https://dazedimg-dazedgroup.netdna-ssl.com/1080/azure/dazed-prod/1260/7/1267249.jpg"
        title="Ariana Grande"
      />
      <Story
        image="https://i.pinimg.com/originals/5e/5c/1d/5e5c1d79060e0887c7a637e732d39be0.jpg"
        profileSrc="https://instagram.fbho3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/118521642_2687295488188699_1061980578101845113_n.jpg?_nc_ht=instagram.fbho3-1.fna.fbcdn.net&_nc_ohc=CvtTWca9WsAAX9GKq4P&oh=51b689eeb170766c6878adc8eed96785&oe=5F7A0061"
        title="Madison Beer"
      />
    </div>
  );
}

export default StoryReel;
