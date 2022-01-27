import { motion } from 'framer-motion';
import React from 'react';
import { defaultAnimationsResult } from '../../utils/defaultAnimations';
import { durationForResult } from '../../utils/duration';
import { abbreviateNumber } from '../../utils/number';

const Item = (props) => {
  const {
    username,
    Icon,
    iconColor,
    from,
    to,
    follower,
    engageRate,
    delayCount,
  } = props;
  return (
    <motion.div
      {...defaultAnimationsResult}
      transition={{ duration: 1, delay: durationForResult()[delayCount] }}
      className='w-full md:w-[19rem] lg:w-1/3 border-[3px] px-8 py-7 box-border rounded-3xl mb-4'
    >
      <div className='flex gap-2 items-center text-3xl mb-5'>
        <p
          className='mt-4 text-4xl'
          style={{
            color: iconColor,
          }}
        >
          <Icon />
        </p>
        <p className='text-white'>{username}</p>
      </div>

      <p className='text-4xl text-center text-white font-bold'>
        {'$'}
        {from} - {'$'}
        {to}
      </p>
      <p className='text-center text-white text-lg mt-1 mb-2'>
        Payout Per Post
      </p>
      <div className='flex justify-between text-center'>
        <div>
          <p className='text-4xl font-semibold text-white'>
            {abbreviateNumber(follower)}
          </p>
          <p className='text-white text-xs'>Followers</p>
        </div>
        <div>
          <p className='text-4xl font-semibold text-white'>
            {engageRate.toFixed(2)}%
          </p>
          <p className='text-white text-xs'>Engagement Rate</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
