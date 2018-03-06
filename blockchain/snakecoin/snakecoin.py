# -*- coding: utf-8 -*-
"""Snakecoin

Snakecoin은 블록체인의 구조를 간단히 파악할 수 있도록 짧은 코드로 구현한 Application이다.
"""

import hashlib as hasher
import datetime as date

# Snakecoin Block 정의
class Block:
  """블록을 생성하는 역할을 담당하는 클래스

  Args:
      index (int): 생성할 블록의 위치
      timestamp (int): 블록이 생성된 시간
      data (str): 데이터
      previous_hash (str): 이전 블록 주소
  """

  def __init__(self, index, timestamp, data, previous_hash):
    self.index = index
    self.timestamp = timestamp
    self.data = data
    self.previous_hash = previous_hash
    self.hash = self.hash_block()

  def hash_block(self):
    # 블록을 식별하기위한 유일한 주소 생성
    sha = hasher.sha256()
    sha.update(str(self.index) + str(self.timestamp) + str(self.data) + str(self.previous_hash))
    return sha.hexdigest()

# 제네시스(첫 번째) 블록 생성
def create_genesis_block():
  # 블록순서: 0, 이전블록주소: 임의값으로 블록 생성
  return Block(0, date.datetime.now(), "Genesis Block", "0")

# 다음 블록 생성
def next_block(last_block):
  this_index = last_block.index + 1
  this_timestamp = date.datetime.now()
  this_data = "Hey! I'm block " + str(this_index)
  this_hash = last_block.hash
  return Block(this_index, this_timestamp, this_data, this_hash)

# 블록체인 생성 및 제네시스 블록 추가
blockchain = [create_genesis_block()]
previous_block = blockchain[0]

# 생성할 블록 수
num_of_blocks_to_add = 20

# 체인에 블록 추가
for i in range(0, num_of_blocks_to_add):
  block_to_add = next_block(previous_block)
  blockchain.append(block_to_add)
  previous_block = block_to_add
  print "Block #{} has been added to the blockchain!".format(block_to_add.index)
  print "Hash: {}\n".format(block_to_add.hash)
