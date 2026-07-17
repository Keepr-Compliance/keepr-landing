import { XIcon, CheckIcon } from "./icons";

export function OldWayVsKeepr() {
  return (
    <section className="band" id="value">
      <div className="wrap">
        <div className="section-head">
          <h2>
            The part of closing everyone dreads — gone<span className="hdot">.</span>
          </h2>
          <p>Here&apos;s the afternoon after a closing — the old way, and with Keepr.</p>
        </div>
        <div className="ovk">
          <div className="ovk-col ovk-old">
            <h3>The old way</h3>
            <ul>
              <li>
                <XIcon /> Scroll and screenshot every text thread, one by one
              </li>
              <li>
                <XIcon /> Dig through thousands of emails to find the right ones
              </li>
              <li>
                <XIcon /> Rename, drag, and file everything into folders
              </li>
              <li>
                <XIcon /> Hope you didn&apos;t miss the one that matters
              </li>
            </ul>
            <div className="tally">
              Over an hour <small>per deal — after you&apos;ve already closed</small>
            </div>
          </div>
          <div className="ovk-col ovk-new">
            <h3>With Keepr</h3>
            <ul>
              <li>
                <CheckIcon /> Open the deal
              </li>
              <li>
                <CheckIcon /> Click Export
              </li>
              <li>
                <CheckIcon /> Send the audit package — every text and email, already in it
              </li>
            </ul>
            <div className="tally">
              90 seconds <small>then back to your next deal</small>
            </div>
          </div>
        </div>
        <p className="ovk-caption">
          Every email, text, and attachment — gathered automatically,{" "}
          <strong>including the text messages no other tool can pull for you.</strong>
        </p>
      </div>
    </section>
  );
}
